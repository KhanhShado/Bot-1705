## Info
👤 Name: Phạm Minh Đồng

🌐 Fb: https://www.facebook.com/donqdz.profile.206

🔐 github: https://github.com/dongdev06

## Hướng dẫn lấy appstate đối với iPhone
- thêm gmail tk và password vào acc.json
- Sau đó qua shell, nhập:
```
node login
```
rồi enter
- Đợi lấy appstate
- Tùy acc mới lấy được nhé

## Hướng dẫn dọn file, tệp rác để tránh bị đầy disk space
- Dọn cache/rác

(commands)

rm -fr script/commands/cache/*.m4a //dọn rác audio của youtube

rm -fr script/commands/cache/*.mp4 //dọn rác video, nên cân nhắc nếu có lưu file mp4 quan trọng

rm -fr script/commands/cache/*.mp4

rm -fr script/commands/cache/+thư mục

rm -fr script/commands/cache/*.png //như mp4, nên cân nhắc

rm -fr script/commands/cache/*.jpg //nên cân nhắc

rm -fr script/commands/cache/*.gif //nên cân nhắc

- Ảnh / gif quan trong để random thì có thể lên các web compress để giảm kích cỡ, 100MB ảnh có thể giảm còn 10-20MB

rm -fr modules/commands/cache/pornlist.txt //để ngăn chụp ảnh web 18+ bằng lệnh screenshot
nếu xóa pornlist thì phải chỉnh luôn lệnh screenshot, làm như video là được

- Một số lệnh cần data khá nặng (cỡ hơn 100MB), ví dụ: findtext với file data ở modules/commands/cache/lang-data
- Nếu không thực sự cần, nên cân nhắc gỡ lệnh + file data của lệnh

(events)
- thường trong cache sẽ có joinGif/leaveGif, bên trong có các file
- nhiều khi fork còn lưu lại gif ảnh custom của các nhóm, cũng cả trăm mb

- dùng lệnh "du -sh * .[^.]*" để xem kích thước file và lọc

- nếu các lệnh dùng canvas như tromcho, ghep v.v bị lỗi sau khi dọn bộ nhớ thì mở file lệnh lên,
- kiếm mấy dòng global.nodemodule['canvas'] đổi sang require('canvas') là được

- Nếu replit bị lỗi ko bấm start được, thì mở .replit rồi dán 3 dòng dưới vào
run = "npm start"
[packager]
ignoredPaths=["."]

- Xem danh sách file/tệp và kích thước của nó, dùng lệnh dưới để dọn các file rác khác trong repl
du -sh * .[^.]*

# Thanks for your attention 💞