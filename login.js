const fs = require("fs-extra");
const login = require("fca-disme");
const readline = require("readline");
const totp = require("totp-generator");
const os = require('os');
const logger = require("./utils/log");
const chalk = require('chalk');

// Lấy đường dẫn cấu hình từ tham số dòng lệnh hoặc sử dụng mặc định
const configPath = process.argv[2] || "./acc.json";
const config = require(configPath);


// Lấy địa chỉ IP
const networkInterfaces = os.networkInterfaces();
const ipAddresses = [];
for (const key in networkInterfaces) {
    const interfaces = networkInterfaces[key];
    for (const iface of interfaces) {
        if (!iface.internal && iface.family === 'IPv4') {
            ipAddresses.push(iface.address);
        }
    }
}

// Tạo interface đọc dòng lệnh
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Thiết lập tùy chọn cho đăng nhập
const option = {
    logLevel: "silent",
    forceLogin: true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
};

// Lấy thông tin từ cấu hình
const email = config.EMAIL;
const password = config.PASSWORD;
const otpkey = config.OTPKEY.replace(/\s+/g, '').toLowerCase();

// Xuất thông báo bắt đầu đăng nhập
console.log(`┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`);
logger("Đang tiến hành đăng nhập...", "┣➤ [ LOGIN ]");
logger("Tiến hành đăng nhập tại:", "┣➤ [ LOGIN ]");
logger(`Email: ${email}`, "┣➤ [ LOGIN ]");
logger(`Password: ${password}`, "┣➤ [ LOGIN ]");
logger(`Địa chỉ IP: ${ipAddresses}`, "┣➤ [ LOGIN ]");

// Thực hiện đăng nhập
login({ email, password }, option, (err, api) => {
    if (err) {
        switch (err.error) {
            case "login-approval":
                if (otpkey) err.continue(totp(otpkey));
                else {
                    logger("Trạng thái: false", "┣➤ [ LOGIN ]");
                    logger(`Vui lòng nhập mã xác minh 2 bước: `, "┣➤ [ LOGIN ]");
                    rl.on("line", line => {
                        err.continue(line);
                        rl.close();
                    });
                }
                break;
            default:
                console.error(err);
                process.exit(1);
        }
        return;
    }

    // Ghi appstate vào tệp appstate.json
    const json = JSON.stringify(api.getAppState());
    fs.writeFileSync(`./${config.APPSTATEPATH}`, json);

    // Xuất thông báo đăng nhập thành công
    logger("Trạng thái: true", "┣➤ [ LOGIN ]");
    logger("Đã ghi xong appstate vào mục appstate.json", "┣➤ [ LOGIN ]");
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);

    // Kết thúc chương trình
    process.exit(0);
});
