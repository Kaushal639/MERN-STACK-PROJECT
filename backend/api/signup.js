const bcrypt = require('bcrypt');
const usermodel = require('../src/model/userschema');

function json(res, status, data) {
  res.status(status).json(data);
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return json(res, 405, { message: 'Method not allowed' });

    const { name, email, password, mobile, pincode, address } = req.body || {};

    if (!name || !email || !password) {
      return json(res, 400, { message: 'name, email, and password are required' });
    }

    if (String(password).length < 6) {
      return json(res, 400, { message: 'password must be at least 6 characters' });
    }

    const existing = await usermodel.findOne({ email });
    if (existing) return json(res, 409, { message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);

    await usermodel.create({
      name,
      email,
      password: hashed,
      mobile,
      pincode,
      address,
    });

    return json(res, 201, { message: 'signup success' });
  } catch (err) {
    console.error('signup error', err);
    return json(res, 500, { message: 'Internal server error' });
  }
};

