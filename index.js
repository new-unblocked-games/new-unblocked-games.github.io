import Headcom from "../src/components/Headcom.js";
import FooterCom from "../src/components/FooterCom.js";
import CookieCom from "../src/components/CookieCom.js";
import GameCommonDis from "../src/Description/GameCommonDis.js";
import { PageList } from "../src/list/PageList.js";
import { Assets } from "../src/list/Assets.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
import { GameList } from "../src/list/GameList.js";
import CategoryGames  from '../src/components/CategoryGames.js'

export default function PrivacyPage() {
  const path = useRouter();
  const first50Games = GameList.slice(0, 50);
  useEffect(() => {
  }, []);
  return (
    <div>
      <Headcom
        title={PageList[7].title}
        s_dis={PageList[7].s_dis}
        path={PageList[7].path[1] + PageList[7].path[0]}
        thumb={PageList[7].thumb}
        logo_16={Assets[0].logo_16}
        logo_32={Assets[0].logo_32}
        logo_192={Assets[0].logo_192}
        logo_270={Assets[0].logo_270}
        logo_512={Assets[0].logo_512}
      />
 <div className="container">
               
 <CategoryGames games={first50Games} category={"New Games"}  />
          <CookieCom />
            </div>
    </div>
  );
}
