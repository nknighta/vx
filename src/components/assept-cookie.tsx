import { useRouter } from 'next/router'
import popstyle from '../styles/popup.module.sass'
import { getWindowHight } from '../scripts/getWidth'
import { setCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

function CookieAcceptPopUp() {
    const [isPopup, setIsPopUp] = useState(false);
    const [assepted, setAssepted] = useState(false);
    const height = getWindowHight();
    const router = useRouter();
    let auth = router.query.auth;
    useEffect(() => {
      if (getCookie('cookie') === 'accepted') {
        setAssepted(true);
        if (router.query.act == "homebtn") {
          router.push({ query: { cokieassept: 'true', act: 'homebtn' } });
          setCookie(
            'act', 'homebtn', {
            maxAge: 60 * 60 * 24 * 30,
          });
        }
      } else {
        setAssepted(false);
      }
    }, []);
    useEffect(() => {
      if (auth) {
        setIsPopUp(false);
      } else {
        setIsPopUp(true);
      }
    }, [auth]);
    return (
      <>
        <div className={popstyle.baseddisplay}>
          {!isPopup ? "":(
            <div className={popstyle.main}
              style={{
                top: `${height - height * 0.27}px`,
                left: `10px`,
                display: assepted ? 'none' : 'block',
                color: '#fff',
              }}>
              this page uses cookies to improve your experience, by continuing to use this page you accept the use of cookies
              <button
                onClick={() => {
                  setCookie('cookie', 'accepted', {
                    maxAge: 60 * 60 * 24 * 30,
                  });
                  setAssepted(true);
                }}
              >
                accept
              </button>
            </div>
          ) }
        </div>
      </>
    )
  }
  

export default CookieAcceptPopUp;