import './header.css'

function Header() {
  return (
    <div className="header">
      <img
      className="header__picture"
      src='https://dkstatics-public.digikala.com/digikala-products/f5b5347e988d3d1cb24284ff4b93ac42a056b12c_1606981904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80'
      />
      <span className="header__title">پول اختلاس چای دبش رو خرجش کن</span>
    </div>
  );
}

export default Header;