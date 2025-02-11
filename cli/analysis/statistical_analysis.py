import streamlit as st

def run_statistical_analysis(df):
    all_columns = df.columns.tolist()
    selected_columns = st.sidebar.multiselect("Select fields for analysis", all_columns)
    
    if selected_columns:
        st.write("Statistical Analysis")
        st.write(df[selected_columns].describe())
