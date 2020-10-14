
import React, { useEffect } from 'react';
import { useState } from 'react';
import reposApi from '../../api/reposApi';
import Loading from '../Loading';
import Noti from "../Noti";
import ListCommit from './ListCommit';
const CommitPage = (props) => {
    const { itemFullName } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getCommits = async () => {
            setIsLoading(true);
            try {
                const params = {
                    per_page: 10,
                };
                const response = await reposApi.getCommits(itemFullName, params);
                if (response.status === 200) setItems(response.data);
            } catch (err) {
                Noti("error", "Error", err.message);
            }
            setIsLoading(false);
        };
        getCommits();
    }, [itemFullName]);
    return (
        <div>
            {isLoading && <Loading />}
            <ListCommit items={items} />
        </div>
    );
};

export default CommitPage;