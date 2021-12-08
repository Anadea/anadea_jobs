import React from 'react'
import postsList from "../../constants/posts-list";

const RelatedPosts = () => {


  return (
    <section className="Section u-bg-jobs-bastille">
      <div className="Section-content">
        <div className="u-spacer-20"></div>
        <div className="ContentGroup u-centered u-mb-60">
          <div className="ContentGroup-title">
            <h2 className="Typography Typography--heading2 Typography--centered Typography--white">
              Related Posts
            </h2>
          </div>
          <div className="row">
            <div className="col-md-7 u-centered">
              <p className="Typography Typography--body3 Typography--white Typography--centered">
                In 2009 Regan Chorlog became the head manager of OnTrac Resident Manager.
              </p>
            </div>
          </div>
        </div>
        <div className="ContentGroup u-centered related-postList">
          {
            postsList.map(post => {
              return (
                <div className="related-post" key={post.id} style={{backgroundImage: `url(${post.image})`}}>
                  <div className="Typography Typography--heading4 Typography--white">{post.title}</div>
                  <div
                    className="Typography Typography--body2-smaller-xs Typography--thin Typography--white u-opacity-7 u-mt-10">{post.type}</div>
                  <div className="related-post__author">
                    <div className="related-post__author-img">
                      <img src={post.userImg} alt={post.name}/>
                    </div>
                    <div className="related-post__author-desc">
                      <div className="Typography Typography--body2 Typography--thin Typography--white">{post.name}</div>
                      <div className="Typography Typography--body1 Typography--thin Typography--white u-opacity-7">{post.date}</div>
                    </div>
                  </div>
                  <a href={post.link} className="related-post__link"/>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default RelatedPosts
