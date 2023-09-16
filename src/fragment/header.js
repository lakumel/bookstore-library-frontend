import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <section id="top">
                <a id="logo" href="index.html">
                    <img src="../../static/img/logo.png" width="200px" height="100px" alt="Logo" />
                </a>
                <div id="search">
                    <div id="search_title">통합검색</div>
                    <div id="search_form">
                        <input type="text" />
                    </div>
                    <div id="search_button">
                        <img src="../../static/img/search2.png" width="30px" height="20px" alt="Search" />
                    </div>
                </div>
                <nav id="top_menu">
                    <ul>
                        <li><a href="login.html">로그인</a></li>
                        <li><a href="join.html">회원가입</a></li>
                        <li><a href="#">마이페이지</a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                </nav>
                <div className="clear"></div>
            </section>
            <nav id="main_menu">
                <ul>
                    <li><a href="#">분야보기</a></li>
                    <li><a href="#">베스트</a></li>
                    <li><a href="#">신상품</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">추천도서</a></li>
                    <li><a href="#">중고서점</a></li>
                    <li><a href="#">CD/BD</a></li>
                    <li><a href="#">문구</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
