import os
import re
import streamlit as st
    initial_sidebar_state="collapsed"
)
# Custom style to make the iframe full screen without borders or gap paddings
# Custom style to disable outer Streamlit scrolling and force full-screen iframe scrolling
st.markdown("""
<style>
    /* Hide default Streamlit decoration header/footer */
    /* Hide Streamlit elements */
    header {visibility: hidden !important;}
    footer {visibility: hidden !important;}
    #MainMenu {visibility: hidden !important;}
    
    /* Remove padding margins from container blocks */
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
    
    /* Force Streamlit iframe to expand fully */
    /* Force the iframe to fill 100% viewport height and allow internal scrolling */
    iframe {
        border: none !important;
        width: 100% !important;
        height: 100vh !important;
        overflow: hidden !important;
        overflow: auto !important;
        margin: 0 !important;
        padding: 0 !important;
    }
except Exception as e:
    st.error(f"Error loading bundled application details: {e}")
