import streamlit as st
import plotly.express as px
import pandas as pd

def plot_data(df, selected_columns):
    """Generates and displays plots for the selected columns."""
    st.write("Plots")
    for col in selected_columns:
        if pd.api.types.is_numeric_dtype(df[col]):
            st.write(f"Plot for {col}")
            fig = px.line(df, x='Timestamp', y=col, title=f'{col} over Time')
            fig.update_layout(width=1200, height=600)
            st.plotly_chart(fig)
        else:
            st.write(f"The column {col} is not numeric and cannot be plotted.")
