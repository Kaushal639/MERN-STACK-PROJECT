const bcrypt = require('bcrypt');
const usermodel = require('../src/model/userschema');

function json(res, status, data) {
  res.status(status).json(data);
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return json(res, 405, { message: 'Method not allowed' });

    const { email, password } = req.body || {};
    if (!email || !password) return json(res, 400, { message: 'email and password are required' });

    // NOTE: existing schema stores `password` as a string; we hash on signup.
    // If your DB already contains plain passwords, login will fail until you migrate.
    const user = await usermodel.findOne({ email });
    if (!user) return json(res, 401, { message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return json(res, 401, { message: 'Invalid credentials' });

    // Optional JWT removed to keep app working; you can add later.
    return json(res, 200, { message: 'login success', email: user.email });
  } catch (err) {
    console.error('login error', err);
    return json(res, 500, { message: 'Internal server error' });
  }
};

