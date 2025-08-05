import React from 'react';

const leaderboardData = [
  { rank: '🥇', initials: 'PP', name: 'Priya Patel', code: 'PRI2025FND', amount: 25000 },
  { rank: '🥈', initials: 'AK', name: 'Arjun Kumar', code: 'ARJ2025FND', amount: 22500 },
  { rank: '🥉', initials: 'SR', name: 'Sneha Reddy', code: 'SNE2025FND', amount: 20000 },
  { rank: '#4', initials: 'RS', name: 'Ushnika Kar', code: 'USHNI2025', amount: 12500 },
  { rank: '#5', initials: 'KS', name: 'Kavya Singh', code: 'KAV2025FND', amount: 11800 },
  { rank: '#6', initials: 'RG', name: 'Rohan Gupta', code: 'ROH2025FND', amount: 10200 },
  { rank: '#7', initials: 'AK', name: 'Aisha Khan', code: 'AIS2025FND', amount: 9500 },
  { rank: '#8', initials: 'VJ', name: 'Vikram Joshi', code: 'VIK2025FND', amount: 8900 },
  { rank: '#9', initials: 'MN', name: 'Meera Nair', code: 'MEE2025FND', amount: 7600 },
  { rank: '#10', initials: 'SV', name: 'Sanjay Verma', code: 'SAN2025FND', amount: 6800 },
];

function Leaderboard() {
  return (
    <div className=" p-8 bg-teal-100/60 py-[5rem]">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#098A7C] p-6">
        <h1 className="text-3xl font-bold text-[#098A7C] mb-2">Top Fundraisers</h1>
        <p className="text-[#09AA9C] mb-6">See how our amazing interns are making an impact!</p>

        <div className="grid grid-cols-3 gap-6 mb-8 text-center">
          <div className="bg-teal-100/50 border border-teal-200 p-4 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold text-[#098A7C]">Total Fundraisers</h2>
            <p className="text-2xl font-bold text-[#1e1e2f]">10</p>
            <p className="text-sm text-gray-600">Active interns</p>
          </div>
          <div className="bg-teal-100/50 border border-teal-200 p-4 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold text-[#098A7C] ">Total Raised</h2>
            <p className="text-2xl font-bold text-[#1e1e2f]">₹1,34,800</p>
            <p className="text-sm text-gray-600">Combined efforts</p>
          </div>
          <div className="bg-teal-100/50 border border-teal-200 p-4 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold text-[#098A7C]">Average per Intern</h2>
            <p className="text-2xl font-bold text-[#1e1e2f]">₹13,480</p>
            <p className="text-sm text-gray-600">Team performance</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[#098A7C] text-[1.7rem]">Rankings</h2>
          <p className="text-sm text-[#09AA9C]">Real-time rankings based on total donations raised</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow text-left ">
            <thead className="bg-[#098A7C] text-white border-teal-600 border-1">
              <tr>
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Intern Name</th>
                <th className="px-4 py-3">Referral Code</th>
                <th className="px-4 py-3">Total Donations</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index} className="border-b hover:bg-teal-50 transition-all border-teal-600 border-1">
                  <td className="px-4 py-3 font-bold text-[#098A7C]">{entry.rank}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#098A7C] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                        {entry.initials}
                      </div>
                      <div>
                        <p className="text-[#1e1e2f] font-medium">{entry.name}</p>
                        <p className="text-sm text-[#09AA9C]">Top Performer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#1e1e2f] font-bold text-[1rem]">{entry.code }</td>
                  <td className="px-4 py-3 font-semibold text-[#1e1e2f]">₹{entry.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#098A7C] font-medium">Keep Climbing! 🚀</p>
          <p className="text-sm text-[#09AA9C] mt-1">
            Every donation counts! Share your referral code, spread the word about Fundsy, and watch your ranking soar. The top performers unlock amazing rewards!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
