import os
import re
import streamlit as st
import streamlit.components.v1 as components

# Set page config
st.set_page_config(
    page_title="India Cars LLM - Pre-Trained Chat Engine",
    page_icon="🚗",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom style to disable outer Streamlit scrolling and force full-screen iframe scrolling
st.markdown("""
<style>
    /* Hide Streamlit elements */
    header {visibility: hidden !important;}
    footer {visibility: hidden !important;}
    #MainMenu {visibility: hidden !important;}
    
    /* Lock outer Streamlit window size and disable scrollbars */
    html, body, [data-testid="stAppViewContainer"], [data-testid="stApp"] {
        overflow: hidden !important;
        height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Remove wrapper padding and block gaps */
    .main .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
        height: 100vh !important;
        overflow: hidden !important;
    }
    
    /* Force the iframe to fill 100% viewport height and allow internal scrolling */
    iframe {
        border: none !important;
        width: 100% !important;
        height: 100vh !important;
        overflow: auto !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    div[data-testid="stVerticalBlock"] {
        gap: 0px !important;
    }
</style>
""", unsafe_allow_html=True)

# Read HTML and bundle CSS and JS files inline dynamically on load
def load_bundled_html():
    base_dir = os.path.dirname(__file__) if os.path.dirname(__file__) else "."
    
    # Read core files
    with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f:
        html = f.read()
        
    with open(os.path.join(base_dir, "style.css"), "r", encoding="utf-8") as f:
        css = f.read()
        
    with open(os.path.join(base_dir, "cars_data.js"), "r", encoding="utf-8") as f:
        cars_data = f.read()
        
    with open(os.path.join(base_dir, "app.js"), "r", encoding="utf-8") as f:
        app_js = f.read()
        
    # Inject CSS style sheets
    html = html.replace('<link rel="stylesheet" href="style.css">', "<style>\n" + css + "\n</style>")
    
    # Inject Javascript Database & Actions
    html = html.replace('<script src="cars_data.js"></script>', "<script>\n" + cars_data + "\n</script>")
    html = html.replace('<script src="app.js"></script>', "<script>\n" + app_js + "\n</script>")
    
    return html

try:
    bundled_content = load_bundled_html()
    # Serve bundled application in components.html
    components.html(bundled_content, height=1000, scrolling=True)
except Exception as e:
    st.error(f"Error loading bundled application details: {e}")
