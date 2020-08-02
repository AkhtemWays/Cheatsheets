import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { connect } from 'react-redux';

function FetchedPosts() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.fetchPosts);
	const loading = useSelector((state) => state.app.loading);

	if (!posts.length && !this.props.loading) {
		return (
			<button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
				Загрузить
			</button>
		);
	} else if (loading) {
		return (
			<div class="spinner-border text-primary" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		);
	} else {
		return posts.map((post) => <Post post={post} key={post.id} />);
	}
}

const mapDispatchToProps = {
	fetchPosts
};

const mapStateToProps = (state) => {
	loading: state.app.loading;
};

export default connect(mapStateToProps, null)(FetchedPosts);
