import pandas as pd

def resample_data(df, interval, columns, group_column, aggregation_methods):
    """Resamples the dataframe based on the provided time interval and individual aggregation methods for each column."""
    df.set_index('Timestamp', inplace=True)
    
    resampled_dfs = []
    for col, agg_method in aggregation_methods.items():
        if agg_method == "mean":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).mean()
        elif agg_method == "max":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).max()
        elif agg_method == "last":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).last()
        elif agg_method == "count":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).count()
        elif agg_method == "min":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).min()
        elif agg_method == "std":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).std()
        elif agg_method == "sum":
            resampled = df[[col, group_column]].groupby(group_column).resample(interval).sum()
        else:
            raise ValueError(f"Invalid aggregation method for column {col}")
        
        resampled = resampled.drop(columns=[group_column]).reset_index()
        resampled_dfs.append(resampled)

    combined_resampled_df = pd.concat(resampled_dfs, axis=1)
    combined_resampled_df = combined_resampled_df.loc[:, ~combined_resampled_df.columns.duplicated()]
    return combined_resampled_df
