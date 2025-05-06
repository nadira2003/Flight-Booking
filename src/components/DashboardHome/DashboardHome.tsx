// ✅ لوحة التحكم الرئيسية (Dashboard) باستخدام Recharts

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const flightStats = [
  { name: 'يناير', bookings: 120 },
  { name: 'فبراير', bookings: 98 },
  { name: 'مارس', bookings: 150 },
  { name: 'أبريل', bookings: 200 },
  { name: 'مايو', bookings: 180 },
];

const revenueStats = [
  { name: 'رحلات داخلية', value: 400000 },
  { name: 'رحلات خارجية', value: 300000 },
];

const COLORS = ['#1D4ED8', '#10B981'];

export function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">لوحة التحكم ✈️</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🟦 مخطط الحجوزات */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">إحصائيات عدد الحجوزات</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={flightStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#1D4ED8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🟩 مخطط الإيرادات */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">نسبة الإيرادات</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueStats.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
