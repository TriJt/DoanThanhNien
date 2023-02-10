import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    HoTen: {
      type: String,
    },
    Lop: {
      type: String,
    },
    Khoa: {
      type: String,
    },
    Email: {
      type: String,
    },
    MSSV: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const DangKySchema = new Schema(
  {
    HoTen: {
      type: String,
    },
    Lop: {
      type: String,
    },
    Khoa: { type: String },

    Email: {
      type: String,
    },
    MSSV: {
      type: String,
    },
    TenSukienDangKy: {
      type: String,
    },
  },
  { timestamps: true }
);

const SuKienSchema = new Schema(
  {
    TenSuKien: {
      type: String,
    },
    SoLuongBanDau: {
      type: Number,
    },
    SoLuong: {
      type: Number,
    },
    Mota: {
      type: String,
    },
    Diadiem: {
      type: String,
    },
    NgayDienRa: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Dangky = mongoose.model("DangKy", DangKySchema);
const SuKien = mongoose.model("Sukien", SuKienSchema);
export { User, Dangky, SuKien };