# Website Graphic Designer - Khám Phá Sự Nghiệp Thiết Kế Đồ Họa

## 📋 Mô Tả

Website này là một trang giới thiệu toàn diện về ngành **Graphic Designer**, bao gồm thông tin chi tiết về công việc, kỹ năng cần thiết, lộ trình học tập, cơ hội nghề nghiệp, và 3 tập podcast hấp dẫn với các chuyên gia trong ngành.

## 🎯 Tính Năng Chính

### 1. **Thiết Kế Responsive**
   - Tối ưu cho mọi kích thước màn hình (desktop, tablet, mobile)
   - Giao diện hiện đại với gradient và hiệu ứng mượt mà

### 2. **Podcast Interactif**
   - 3 tập podcast đầy đủ với phần mô tả ngắn gọn
   - Trình phát audio tích hợp với:
     - Nút play/pause
     - Thanh tiến độ có thể kéo
     - Hiển thị thời gian hiện tại
     - Thời lượng podcast
   - Nút "Nghe Ngay" để bắt đầu phát

### 3. **Hiệu Ứng Bắt Mắt**
   - ✨ Animated gradient
   - 🔄 Rotating logo
   - 📰 Ticker call-to-action
   - 🎯 Hover zoom effects
   - 📍 Smooth scroll animations
   - 🎪 Floating elements
   - 💫 Ripple button effects

### 4. **Cấu Trúc Nội Dung**
   - **Header**: Logo + Navigation menu cố định
   - **Hero Section**: Banner lớn với nút "Tìm Hiểu Thêm"
   - **Ticker**: Dải thông tin chạy ngang
   - **About**: Giới thiệu về trang web và nhóm
   - **Categories**: 4 danh mục chính
   - **Podcast**: 3 tập podcast đầy đủ
   - **Profession**: Chi tiết về ngành (công việc, kỹ năng, học tập, cơ hội)
   - **Contact**: Thông tin liên hệ
   - **Footer**: Bản quyền và liên kết bổ sung

## 📁 Cấu Trúc File

```
t4/
├── index.html              # File HTML chính
├── style.css               # Stylesheet (CSS)
├── script.js               # JavaScript cho tương tác
├── logo.png                # Logo (sử dụng trong header)
├── banner.png              # Banner (sử dụng trong hero section)
├── Audio podcast tập 1.aac # File audio tập 1
├── Audio podcast tập 2.aac # File audio tập 2
├── Audio podcast tập 3.aac # File audio tập 3
└── README.md               # File này
```

## 🚀 Cách Sử Dụng

### Mở Website
1. Mở thư mục `t4` trong VS Code hoặc trình duyệt
2. Click chuột phải vào `index.html` → **Open with Live Server**
3. Hoặc copy đường dẫn file vào thanh địa chỉ trình duyệt

### Nghe Podcast
1. Scroll xuống phần "Podcast Series"
2. Click nút **"Nghe Ngay"** hoặc nút play trên trình phát
3. Sử dụng thanh tiến độ để tua đi tua lại
4. Nhấn pause để dừng phát

### Điều Hướng
- Click các link trong thanh menu để scroll đến các phần
- Nút **"Tìm Hiểu Thêm"** trong hero section sẽ scroll tới danh mục

## 🎨 Màu Sắc & Thiết Kế

- **Primary Color**: #d97706 (Cam đậm)
- **Secondary Color**: #b45309 (Nâu cam)
- **Accent Color**: #f59e0b (Vàng cam)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## ✨ Các Hiệu Ứng Đặc Biệt

### Navigation Bar
- Sticky menu ở đầu trang
- Underline animation trên hover
- Logo xoay liên tục (rotating animation)

### Hero Section
- Animated gradient background
- Floating elements
- Bounce animation trên button
- Smooth fade-in effect

### Categories
- Hover zoom effect
- Top border animation
- Card elevation on hover

### Podcast Section
- Floating background effect
- Dynamic play button
- Progress bar interactif
- Floating badge animation

### Profession Section
- Smooth scroll animations
- Card elevation effects
- Timeline animation
- Hover color transitions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Dưới 768px

## 🔧 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa các CSS variables trong `style.css`:
```css
:root {
    --primary-color: #d97706;
    --secondary-color: #b45309;
    --accent-color: #f59e0b;
}
```

### Thay Đổi Podcast
Cập nhật file âm thanh:
1. Đặt file `.aac` hoặc `.mp3` mới vào thư mục
2. Cập nhật `src` trong thẻ `<audio>` trong `index.html`

### Thay Đổi Logo/Banner
1. Đặt file ảnh mới với tên `logo.png` và `banner.png`
2. File sẽ tự động tải vào

## 🎯 Tính Năng JavaScript

- **Audio Player Controls**: Play, pause, seek, duration
- **Smooth Scroll Navigation**: Scroll mượt tới các phần
- **Intersection Observer**: Animations khi scroll
- **Mobile Menu Toggle**: Menu hamburger trên mobile
- **Keyboard Shortcuts**: Space bar để play/pause
- **Scroll to Top Button**: Button để về đầu trang
- **Ripple Effects**: Hiệu ứng sóng trên button
- **Performance Optimizations**: Lazy loading, efficient animations

## 🌐 Browser Compatibility

- Chrome/Edge (phiên bản mới nhất)
- Firefox (phiên bản mới nhất)
- Safari (phiên bản mới nhất)
- Mobile browsers

## 📊 SEO & Performance

- Meta tags cho SEO
- Optimized images
- Smooth animations (60 FPS)
- Lazy loading images
- Responsive design

## 🔐 Lưu Ý

- Tất cả file phải nằm cùng thư mục
- Kết nối internet không bắt buộc (sử dụng Font Awesome từ CDN cho icons)
- Hỗ trợ AudioContext API cho trình phát audio

## 📞 Liên Hệ & Hỗ Trợ

Nếu có bất kỳ câu hỏi hoặc vấn đề, vui lòng liên hệ:
- Email: info@graphicdesigner.vn
- Điện thoại: +84 (28) 3815 5555
- Địa chỉ: TP. Hồ Chí Minh, Việt Nam

## 📄 Bản Quyền

© 2026 Graphic Designer - Khám Phá Sự Nghiệp Thiết Kế Đồ Họa. Tất cả quyền được bảo lưu.

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: Tháng 1, 2026
