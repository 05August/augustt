# Wakatime Integration

This project includes a comprehensive Wakatime integration that provides real-time coding statistics and detailed analytics dashboard.

## Features

- **Live Coding Status**: Real-time display of your current coding activity
- **Statistics Dashboard**: Detailed analytics with multiple time ranges
- **Auto-refresh**: Automatic data updates every 5 minutes
- **Beautiful UI**: Clean, responsive design matching the portfolio theme
- **Multi-language Support**: Tracks all programming languages
- **Project Tracking**: Monitor time spent on different projects

## Setup

### 1. Get Wakatime API Key

1. Sign up for a free account at [wakatime.com](https://wakatime.com)
2. Install Wakatime plugin in your editor/IDE
3. Get your API key from [wakatime.com/api-key](https://wakatime.com/api-key)

### 2. Environment Configuration

Add your Wakatime API key and optional cron secret to your environment variables:

```bash
# .env.local
WAKATIME_API_KEY=waka_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Optional: For Vercel Cron Job security
CRON_SECRET=your-secure-random-string

# For production deployment
VERCEL_URL=your-app-url.vercel.app
```

### 3. Start Coding

Once configured, the integration will automatically:

- Track your coding time
- Display live status in the portfolio
- Pre-generate static stats pages with ISR
- Update statistics daily via Vercel Cron

### 4. Vercel Deployment Setup

1. Deploy to Vercel: `vercel --prod`
2. Add environment variables in Vercel dashboard:
   - `WAKATIME_API_KEY`
   - `CRON_SECRET` (generate a secure random string)
3. Cron job will automatically run daily at midnight UTC
4. Manual revalidation available at: `https://your-app.vercel.app/api/revalidate`

## API Endpoints

### Internal API Routes

Our application uses these internal API routes:

#### `/api/wakatime-status`

- **Purpose**: Get current coding status and today's stats
- **Method**: GET
- **Returns**: Live coding status, current project, language, and today's total time
- **Update Frequency**: Every 5 minutes

#### `/api/wakatime-stats`

- **Purpose**: Get detailed statistics for specific time ranges
- **Method**: GET
- **Query Parameters**: `range` (last_7_days, last_30_days, last_6_months, last_year, all_time)
- **Returns**: Languages, projects, editors, categories breakdown
- **Rate Limit**: 100 requests per hour

#### `/api/wakatime-summaries`

- **Purpose**: Get daily summaries and activity data
- **Method**: GET
- **Query Parameters**: `start`, `end` (date range)
- **Returns**: Daily coding summaries with detailed breakdowns
- **Rate Limit**: 100 requests per hour

#### `/api/wakatime-all-time`

- **Purpose**: Get all-time coding statistics
- **Method**: GET
- **Returns**: Total coding time since account creation
- **Update Frequency**: Every hour

### Wakatime API Endpoints Used

Our backend integrates with these Wakatime API endpoints:

#### Current User Stats

```
GET https://api.wakatime.com/api/v1/users/current/status_bar/today
```

- Current coding status
- Today's total coding time
- Last activity timestamp

#### Statistics

```
GET https://api.wakatime.com/api/v1/users/current/stats/{range}
```

- **Ranges**: last_7_days, last_30_days, last_6_months, last_year, all_time
- **Data**: Languages, projects, editors, categories with percentages
- **Metrics**: Total time, daily averages

#### Summaries

```
GET https://api.wakatime.com/api/v1/users/current/summaries
```

- **Parameters**: start, end (date range)
- **Data**: Daily summaries with detailed breakdowns
- **Granularity**: Day-by-day activity

#### All Time Since Today

```
GET https://api.wakatime.com/api/v1/users/current/all_time_since_today
```

- Total coding time since account creation
- Daily average calculations
- Account creation date

## Dashboard Usage

### Accessing the Dashboard

Visit `/stats` to view your complete Wakatime analytics dashboard.

### Available Sections

1. **Overview**: Key metrics and summary statistics
2. **Activity Breakdown**: Charts showing languages, projects, and editors
3. **Time Range Selector**: Choose from 7 days to all-time statistics

### Time Ranges

- **7 Days**: Last week's activity
- **30 Days**: Last month's activity
- **6 Months**: Last 6 months' activity
- **Year**: Last year's activity
- **All Time**: Complete history since account creation

### Common Issues

#### "Failed to fetch coding status"

- Check your `WAKATIME_API_KEY` environment variable
- Verify the API key is valid at [wakatime.com/api-key](https://wakatime.com/api-key)
- Ensure you have coding activity tracked today

#### "No data available"

- Make sure Wakatime plugin is installed in your editor
- Verify you've been coding recently (within the selected time range)
- Check that your Wakatime account has tracked data

#### Dashboard not loading

- Check browser console for JavaScript errors
- Verify all API routes are accessible
- Ensure proper environment configuration

### Rate Limits

Wakatime API has rate limits:

- **Free accounts**: 100 requests per hour
- **Paid accounts**: 1000 requests per hour

Our integration respects these limits with:

- Intelligent caching
- Minimal API calls
- Efficient data fetching

## Development

### Adding New Endpoints

1. Create API route in `src/app/api/wakatime-{name}/route.ts`
2. Add proper TypeScript interfaces
3. Include error handling and validation
4. Update this documentation

### Customizing UI

- Components are in `src/features/wakatime/components/`
- Follow existing design patterns
- Use consistent styling with the portfolio theme

## Security

- API key is server-side only (never exposed to client)
- All requests are authenticated
- No sensitive data stored in localStorage
- Proper CORS configuration

## Contributing

When contributing to the Wakatime integration:

1. Test with your own Wakatime account
2. Follow TypeScript best practices
3. Add proper error handling
4. Update documentation
5. Ensure responsive design

## License

This Wakatime integration is part of the portfolio project and follows the same license terms.
