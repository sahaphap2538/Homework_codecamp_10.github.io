### Codecamp#10
    1. นายสหภาพ เนาวะราช
    2. Homwork1
        การบ้าน #1 - Pikkanode SignUp Page
            -ใช้ React-Router ทำ Path /signup และทำ Component <SignUp /> โดยให้มี form ให้กรอกเพื่อสมัครสมาชิก มี element ดังนี้
            -Email, Password, Confirm Password และปุ่ม Sign Up
            -Validate ด้วยครับ
            -หลังจากกด Sign Up แล้วให้ทำการ fetch post ข้อมูลแบบ json ไปยัง API signup ของ server ที่ได้ทำไว้ แล้ว console.log  ผลลัพท์ที่ server ตอบกลับมา
        การบ้าน #2 - Pikkanode SignIn Page
            -ใช้ React-Router ทำ Path /signin และทำ Component <SignIn /> โดยให้มี form ให้กรอกเพื่อ sign in มี element ดังนี้
            -Email, Password, และปุ่ม Sign In
            -Validate ข้อมูลด้วย
            -หลังจากกด Sign In แล้วให้ทำการ fetch ข้อมูลแบบ json ไปยัง API signin ของ server ที่ได้ทำไว้ หาก server ตอบกลับมาว่า           -ok ให้ setState isAuth = true

        การบ้าน #3 - Pikkanode Create Page
            -ใช้ React-Router ทำ Path /create และทำ Component <CreatePikka /> โดยให้มี form ให้กรอกเพื่อสร้าง pikka มี element ดังนี้
            -Caption, Picture File Input, และปุ่ม Create
            -Validate ข้อมูลด้วย
            -หลังจากกด Create แล้วให้ทำการ fetch ข้อมูลแบบ multipart ไปยัง API post pikka ของ server ที่ได้ทำไว้ หาก server          -ตอบกลับมาว่า ok ให้ redirect ไปที่ path /
        การบ้าน #4 - Pikkanode SearchBar
            -ทำ Component <SearchBar /> เป็น Input สำหรับ search pikka ในหน้าแรก
            -พิมพ์แล้วสามารถ search pikka ได้ในทันที (search จาก caption)
            -ส่วน State ของ Pikka ในหน้าแรกให้ mock ไปก่อน (หากใครสามารถ fetch จาก server ได้จะทำเลยก็ได้)

