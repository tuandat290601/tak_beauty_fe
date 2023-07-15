import React from "react";
import { SectionTitle } from "../../../components";
import ReactPlayer from "react-player/lazy";

import "./News.sass";
import { TikTokEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const News = () => {
  return (
    <section id="news" className="news">
      <SectionTitle title="Tin tức nổi bật" />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-xl-6 m-auto m-xl-0 mb-5 mb-xl-0 d-flex flex-column">
            <ReactPlayer
              controls={true}
              width={"100%"}
              url="https://www.youtube.com/watch?v=kQwtLyg3Qs4&list=RDkQwtLyg3Qs4&start_radio=1&ab_channel=VieChannel"
            />
            <button className="btn custom-btn mt-3 p-3 fs-4 d-flex justify-content-center align-items-center">
              <Link
                to="https://embedsocial.com/blog/embed-tiktok-video/"
                target="_blank"
              >
                XEM THÊM
                <BsYoutube className="fs-3 ms-3" />
              </Link>
            </button>
          </div>

          <div className="col-12 col-xl-6 m-lg-auto m-xl-0">
            <div className="row">
              <div className="col-6">
                <TikTokEmbed
                  url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
                  width={324}
                  height={570}
                />
              </div>
              <div className="col-6 d-flex justify-content-end">
                <TikTokEmbed
                  url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
                  width={324}
                  height={570}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
