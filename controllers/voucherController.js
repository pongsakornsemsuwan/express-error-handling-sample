const BusinessError = require('../utils/BusinessError');

const voucherController = async (req, res, next) => {
  try {
    const code  = parseInt(req.query.code)

    // 1. SAMPLE BUSINESS ERROR #1
    if(code === 0) {
      throw new BusinessError("โค้ดหมดอายุแล้วจ้า", 'VOUCHER_EXPIRED');
    }

    // 2. SAMPLE BUSINESS ERROR #2
    if (code === -1) {
      throw new BusinessError("โค้ดผิดจ้า", 'INVALID_VOUCHER');
    }

    // 3. SAMPLE UNEXPECTED ERROR
    if (isNaN(code)) {
      console.log(code.property.somevalue);
    }

    // 4. SAMPLE GOOD CASE
    res.json({
      data: {
        description: 'code ok',
      }
    });
  } catch (e) {
    next(e)
  }
}

module.exports = voucherController;