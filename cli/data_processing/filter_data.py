def filter_data_by_date(df, start_date, end_date):
    """Filters the dataframe by date range."""
    return df[(df['Timestamp'] >= start_date) & (df['Timestamp'] <= end_date)]
