import React from 'react';
import ArticleTextToggleButton from './ArticleTextToggleButton';

describe('ArticleList tests', () => {
	let isTextShowing = false;

	function onClick() {
		isTextShowing = !isTextShowing;
	}
	it('renders correctly for show less', () => {
		const { container } = render(<ArticleTextToggleButton buttonText="Show less" onClick={onClick} />);
		expect(container).toMatchSnapshot();
	});
	it('renders correctly for show more', () => {
		const { container } = render(<ArticleTextToggleButton buttonText="Show more" onClick={onClick} />);
		expect(container).toMatchSnapshot();
	});
});
