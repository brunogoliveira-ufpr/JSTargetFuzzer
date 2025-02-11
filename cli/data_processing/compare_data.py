import pandas as pd

def compare_data(dfs, interval, columns, group_column, aggregation_methods):
    """Compares data from multiple dataframes based on the provided time interval and aggregation methods."""
    resampled_dfs = []

    for df in dfs:
        df = df.copy()
        df['Timestamp'] = pd.to_datetime(df['Timestamp'])
        df['Interval'] = df['Timestamp'].dt.floor(interval).dt.time  # Normalize for the selected interval to time only
        df.set_index('Interval', inplace=True)
        resampled_data = {}

        for col in columns:
            agg_method = aggregation_methods[col]
            if agg_method == "mean":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).mean().reset_index()
            elif agg_method == "max":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).max().reset_index()
            elif agg_method == "last":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).last().reset_index()
            elif agg_method == "count":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).count().reset_index()
            elif agg_method == "min":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).min().reset_index()
            elif agg_method == "std":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).std().reset_index()
            elif agg_method == "sum":
                resampled = df[[col, group_column]].groupby([group_column, 'Interval']).sum().reset_index()
            else:
                raise ValueError(f"Invalid aggregation method for column {col}")

            resampled_data[col] = resampled.set_index(['Interval', group_column])[col]

        combined_resampled_df = pd.concat(resampled_data.values(), axis=1).reset_index()
        resampled_dfs.append(combined_resampled_df)

    return resampled_dfs
