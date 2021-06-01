import React, { useState, useEffect } from "react";
import "./Repositories.css";
import ReactPaginate from "react-paginate";
import union from "../../img/Union.png"
import axios from "axios"

const Repositories = ({ username, data, rep, setRep }) => {
    const [pageNumber, setPageNumber] = useState(1);

    const handleReposRequest = () => {
        axios.get(`https://api.github.com/users/${username}/repos?per_page=${repPerPage}&page=${pageNumber}`)
            .then((data) => {
                setRep(data.data.map((el) => {
                    return el;
                }));
            });
    };

    useEffect(() => {
        handleReposRequest();
    }, [pageNumber]);

    const changePage = ({ selected }) => {
        setPageNumber(selected + 1);
    };

    useEffect(() => {
        setPageNumber(1);
    }, [username]);

    const repPerPage = 4;
    const displayRep = rep
        .map((name, i) => {
            return (
                <li key={i} className="marker">
                    <div className="pad">
                        <div className="rep_url__pos">
                            <a className="rep_url" target="_blank" href={name.html_url}>{name.name}</a>
                        </div>
                        <div className="rep_descr__pos">
                            {name.description}
                        </div>
                    </div>
                </li>);
        });

    const pageCount = Math.ceil(data.public_repos / repPerPage);

    return (
        <div className="main_repos">
            <div>
                {(data.public_repos) ? <h1 className="repos">Repositories: ({data.public_repos})</h1> : <div></div>}
            </div>
            {((data.public_repos == 0) == false)
                ? <div>
                    <div className="rep_height">
                        {displayRep}
                    </div>
                    {(data.public_repos)
                        ? <div className="dp_flex">
                            {(data.public_repos <= ((pageNumber) * 4) ?
                                <div className="number_page">
                                    {((pageNumber) * 4 - 3)} - {data.public_repos} of {data.public_repos} items
                                    </div>
                                : <div className="number_page">
                                    {((pageNumber) * 4 - 3)} - {(pageNumber) * 4} of {data.public_repos} items
                                    </div>)}
                            <div className="pagination_position">
                                {(data.public_repos)
                                    ? <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"paginationBttns"}
                                        previousLinkClassName={"previousBttn"}
                                        nextLinkClassName={"nextBttn"}
                                        disabledClassName={"paginationDisabled"}
                                        activeClassName={"paginationActive"}
                                    />
                                    : <div></div>}
                            </div>
                        </div>
                        : <div></div>}
                </div>
                :
                <div className="rep_position" >
                    <img className="rep_example" src={union}></img>
                    <div className="rep_empty__text">Repository list is empty</div>
                </div>}
        </div>
    );
};

export default Repositories;