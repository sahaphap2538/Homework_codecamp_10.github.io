### Codecamp#10
    1. นายสหภาพ เนาวะราช
    2. Homwork React2
        การบ้าน #1 - PikkaNode Home
            -Fetch List ข้อมูล Pikka มาแสดงหน้า Home โดยใช้ความรู้เรื่อง Life Cycle ที่เรียนไปวันนี้

            -มีข้อแม้ว่า ตอนที่ยัง Fetch ไม่เสร็จ ให้ขึ้นข้อความว่า Loading หรือ มี animation Loading อยู่ 

        การบ้าน #2 - Pikkanode View Page
            -ใช้ React-Router ทำ Path /pikka/:id และทำ Component <Pikka /> สำหรับแสดงหน้า View Pikka ตาม ID ที่ได้รับ

            -Fetch ข้อมูลของ Pikka ตาม ID มาแสดงผล
            -มีข้อแม้ว่า ตอนที่ยัง Fetch ไม่เสร็จ ให้ขึ้นข้อความว่า Loading หรือ มี animation Loading อยู่ 

        การบ้าน #3 - Pikkanode Post Comment
            -ต่อจากข้อ #2 วันนี้ ให้ทำ logic post comment ของ Pikka หน้านั้นๆ
            -หาก Post สำเร็จให้อัพเดท comment ด้วย โดยไม่ต้องไป fetch ขอ Pikka ใหม่
            -ห้ามกด Post รัวๆได้ ให้ Post ทีละครั้งให้เสร็จถึงจะ Post ใหม่ได้

        การบ้าน #4 - Pikkanode Like
            -เพิ่มระบบ Like / Unlike Pikka โดยให้ Like จากหน้าแรกก็ได้ หรือจากหน้า view pikka ก็ได้
            -หากยังไม่ได้ Sign In จะไม่สามารถกด Like ได้ (จะใช้วิธี Disable ปุ่ม หรือซ่อนปุ่มก็ได้) 

        การบ้าน #5 - Pikkanode Super Ultra Ultimate Instinct Version (Take away)
            -Email Verification, Resend Email
            -Forgot Password, Reset Password
            -ระบบเช็ค Auth ตั้งแต่โหลดเว็บเสร็จ
            -ระบบ Edit Pikka, Delete Pikka
            -แสดง Email ของ User ที่ Sign In อยู่
            -Notification แจ้งเตือนเวลา Action ไม่สำเร็จ
            -แสดงชื่อคนโพส comment
            -API list Pikka ควรจะมี query param สำหรับการทำ limit offset หรือ filter

