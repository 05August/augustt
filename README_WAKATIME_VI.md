# Tích Hợp Wakatime

Dự án này bao gồm một hệ thống tích hợp Wakatime toàn diện, cung cấp thống kê coding theo thời gian thực và dashboard phân tích chi tiết.

## Tính Năng

- **Trạng Thái Coding Trực Tiếp**: Hiển thị hoạt động coding hiện tại theo thời gian thực
- **Dashboard Thống Kê**: Phân tích chi tiết với nhiều khoảng thời gian
- **Tự Động Làm Mới**: Cập nhật dữ liệu tự động mỗi 5 phút
- **Giao Diện Đẹp**: Thiết kế sạch sẽ, responsive phù hợp với theme portfolio
- **Hỗ Trợ Đa Ngôn Ngữ**: Theo dõi tất cả ngôn ngữ lập trình
- **Theo Dõi Dự Án**: Giám sát thời gian spent trên các dự án khác nhau

## Cài Đặt

### 1. Lấy Wakatime API Key

1. Đăng ký tài khoản miễn phí tại [wakatime.com](https://wakatime.com)
2. Cài đặt plugin Wakatime trong editor/IDE của bạn
3. Lấy API key từ [wakatime.com/api-key](https://wakatime.com/api-key)

### 2. Cấu Hình Environment

Thêm Wakatime API key và cron secret (tùy chọn) vào environment variables:

```bash
# .env.local
WAKATIME_API_KEY=waka_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Tùy chọn: Bảo mật cho Vercel Cron Job
CRON_SECRET=your-secure-random-string

# Cho production deployment
VERCEL_URL=your-app-url.vercel.app
```

### 3. Bắt Đầu Coding

Sau khi cấu hình, integration sẽ tự động:

- Theo dõi thời gian coding của bạn
- Hiển thị trạng thái live trong portfolio
- Pre-generate static stats pages với ISR
- Cập nhật thống kê hàng ngày qua Vercel Cron

### 4. Cài Đặt Vercel Deployment

1. Deploy lên Vercel: `vercel --prod`
2. Thêm environment variables trong Vercel dashboard:
   - `WAKATIME_API_KEY`
   - `CRON_SECRET` (tạo một chuỗi random bảo mật)
3. Cron job sẽ tự động chạy hàng ngày lúc nửa đêm UTC
4. Manual revalidation có sẵn tại: `https://your-app.vercel.app/api/revalidate`

## API Endpoints

### Internal API Routes

Ứng dụng sử dụng các internal API routes sau:

#### `/api/wakatime-status`

- **Mục đích**: Lấy trạng thái coding hiện tại và stats hôm nay
- **Method**: GET
- **Trả về**: Trạng thái coding live, dự án hiện tại, ngôn ngữ, và tổng thời gian hôm nay
- **Tần suất cập nhật**: Mỗi 5 phút

#### `/api/wakatime-stats`

- **Mục đích**: Lấy thống kê chi tiết cho các khoảng thời gian cụ thể
- **Method**: GET
- **Query Parameters**: `range` (last_7_days, last_30_days, last_6_months, last_year, all_time)
- **Trả về**: Phân tích ngôn ngữ, dự án, editor, categories
- **Rate Limit**: 100 requests mỗi giờ

#### `/api/wakatime-summaries`

- **Mục đích**: Lấy tóm tắt hàng ngày và dữ liệu hoạt động
- **Method**: GET
- **Query Parameters**: `start`, `end` (khoảng ngày)
- **Trả về**: Tóm tắt coding hàng ngày với phân tích chi tiết
- **Rate Limit**: 100 requests mỗi giờ

#### `/api/wakatime-all-time`

- **Mục đích**: Lấy thống kê coding tổng thể
- **Method**: GET
- **Trả về**: Tổng thời gian coding từ khi tạo tài khoản
- **Tần suất cập nhật**: Mỗi giờ

### Wakatime API Endpoints Được Sử Dụng

Backend tích hợp với các Wakatime API endpoints sau:

#### Current User Stats

```
GET https://api.wakatime.com/api/v1/users/current/status_bar/today
```

- Trạng thái coding hiện tại
- Tổng thời gian coding hôm nay
- Timestamp hoạt động cuối cùng

#### Statistics

```
GET https://api.wakatime.com/api/v1/users/current/stats/{range}
```

- **Ranges**: last_7_days, last_30_days, last_6_months, last_year, all_time
- **Dữ liệu**: Ngôn ngữ, dự án, editor, categories với phần trăm
- **Metrics**: Tổng thời gian, trung bình hàng ngày

#### Summaries

```
GET https://api.wakatime.com/api/v1/users/current/summaries
```

- **Parameters**: start, end (khoảng ngày)
- **Dữ liệu**: Tóm tắt hàng ngày với phân tích chi tiết
- **Granularity**: Hoạt động từng ngày

#### All Time Since Today

```
GET https://api.wakatime.com/api/v1/users/current/all_time_since_today
```

- Tổng thời gian coding từ khi tạo tài khoản
- Tính toán trung bình hàng ngày
- Ngày tạo tài khoản

## Sử Dụng Dashboard

### Truy Cập Dashboard

Truy cập `/stats` để xem dashboard phân tích Wakatime đầy đủ.

### Các Phần Có Sẵn

1. **Overview**: Metrics chính và thống kê tóm tắt
2. **Activity Breakdown**: Biểu đồ hiển thị ngôn ngữ, dự án, và editor
3. **Time Range Selector**: Chọn từ 7 ngày đến thống kê tổng thể

### Khoảng Thời Gian

- **7 Ngày**: Hoạt động tuần trước
- **30 Ngày**: Hoạt động tháng trước
- **6 Tháng**: Hoạt động 6 tháng trước
- **Năm**: Hoạt động năm trước
- **Tổng Thể**: Lịch sử hoàn chỉnh từ khi tạo tài khoản

## Khắc Phục Sự Cố

### Các Vấn Đề Thường Gặp

#### "Failed to fetch coding status"

- Kiểm tra environment variable `WAKATIME_API_KEY`
- Xác minh API key hợp lệ tại [wakatime.com/api-key](https://wakatime.com/api-key)
- Đảm bảo bạn có hoạt động coding được tracked hôm nay

#### "No data available"

- Đảm bảo plugin Wakatime đã được cài đặt trong editor
- Xác minh bạn đã coding gần đây (trong khoảng thời gian được chọn)
- Kiểm tra tài khoản Wakatime có dữ liệu được tracked

#### Dashboard không load

- Kiểm tra browser console để xem JavaScript errors
- Xác minh tất cả API routes có thể truy cập
- Đảm bảo cấu hình environment đúng

### Rate Limits

Wakatime API có rate limits:

- **Tài khoản miễn phí**: 100 requests mỗi giờ
- **Tài khoản trả phí**: 1000 requests mỗi giờ

Integration tôn trọng các giới hạn này với:

- Intelligent caching
- Minimal API calls
- Efficient data fetching

## Development

### Thêm Endpoints Mới

1. Tạo API route trong `src/app/api/wakatime-{name}/route.ts`
2. Thêm TypeScript interfaces phù hợp
3. Bao gồm error handling và validation
4. Cập nhật documentation này

### Tùy Chỉnh UI

- Components trong `src/features/wakatime/components/`
- Tuân theo design patterns hiện có
- Sử dụng styling nhất quán với portfolio theme

## Bảo Mật

- API key chỉ ở server-side (không bao giờ expose ra client)
- Tất cả requests đều được authenticated
- Không lưu sensitive data trong localStorage
- Cấu hình CORS phù hợp

## Đóng Góp

Khi đóng góp cho Wakatime integration:

1. Test với tài khoản Wakatime của riêng bạn
2. Tuân theo TypeScript best practices
3. Thêm proper error handling
4. Cập nhật documentation
5. Đảm bảo responsive design

## Giấy Phép

Wakatime integration này là một phần của dự án portfolio và tuân theo cùng license terms.
