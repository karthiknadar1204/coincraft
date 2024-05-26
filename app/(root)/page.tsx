import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            // user={loggedIn?.firstName || 'Guest'}
            user='Karthik'
            subtext="Access and manage your account and transactions efficiently."
          />
          
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2000}
          />
        </header>

        {/* <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      {/* <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      /> */}
    </section>
  )
}

export default Home