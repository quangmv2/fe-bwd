```cp .env.example .env
npm i --save
npm run start```

- Default port: 3000


- @type: Khai báo kiểu dữ liệu
- assets: Chứa ảnh, icon, font chữ,...
- common: Chung,...
- components: chứa các component dùng chung. Tạo thư mục tên component và tạo file index.tsx trong thư mục đó và export ngoài file index.tsx (Làm như codebase)
- config: Chứa các config
- constant: Các biến constant dùng chung
- context: Nơi viết các store auth,... reducer, provider
- pages: Các trang page khai báo tại đây (app - render router)
- router: Khai báo router của page
- tools: fetch data
- utils: Các hàm, hook dùng chung