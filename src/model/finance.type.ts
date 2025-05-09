export enum PaymentCategory {
  WITHDRAW = 0,
  SALARY = 1,
}

export enum Category_Type {
  FUEL = 0, // น้ำมัน
  TRAVEL = 1, // เดินทาง
  ACCOMMODATION = 2, // ที่พัก
  ALLOWANCE = 3, // เบี้ยเลี้ยง
  TRANSPORT = 4, // ขนส่ง
  TOOL = 5, // อุปกรณ์
  MEDICAL = 6, // รักษา
  OTHER = 7, // อื่นๆ
}

export interface CategoryDetail {
  type: Category_Type;
  amount: number;
}

export interface FinanceData {
  _id?: string;
  number: number;
  name: string; // ชื่อบุคคล
  ownerName: string; // หัวข้อ
  section: PaymentCategory; // หมวดหมู่
  categorys: CategoryDetail[];
  price: number; // จำนวนเงิน
  date: string; // วันที่สร้าง
  datePrice: string; // วันที่จ่าย
  detel: string; // รายละเอียด
}
