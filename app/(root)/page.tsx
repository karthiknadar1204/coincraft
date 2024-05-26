import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

  // const loggedIn={firstName:'Karthik',lastName:'Nadar',email:'karthiknadar1204@gmail.com'}

  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
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

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{
          currentBalance:500.50
        }]}
      />
    </section>
  )
}

export default Home