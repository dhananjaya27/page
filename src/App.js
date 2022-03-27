import React, { useState } from "react";
import { data } from "./data";




import Pagination from "./Pagination";


function App() {
  //for consuming data from data.js page
  const [posts, setPosts] = useState(data);
  //by default how many data show on a page
  const [showPerPage, setShowPerPage] = useState(4);
   //set start and end 
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
//
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">

        {/* logic for showing number of data on a page */}

          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5>
                    #{post.id} {post.title}
                  </h5>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
     
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default App;