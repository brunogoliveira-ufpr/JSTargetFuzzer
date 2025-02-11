import streamlit as st
import plotly.express as px
import pandas as pd

def plot_group_counts(df, group_column):
    """Generates and displays plots for the count of occurrences of each group."""
    try:
        st.write(f"Count of occurrences for {group_column}")
        fig = px.bar(df, x='Timestamp', y='Count', color=group_column, barmode='group', title=f'Count of {group_column} occurrences over time')
        fig.update_layout(width=1200, height=600)
        st.plotly_chart(fig)
    except KeyError as e:
        st.error(f"Key error: {e}. Please make sure the columns are correctly selected.")
    except Exception as e:
        st.error(f"An error occurred while plotting: {e}")
