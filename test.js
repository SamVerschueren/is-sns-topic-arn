import test from 'ava';
import fn from './';

test(t => {
	t.false(fn());
	t.false(fn('foo'));
	t.false(fn('arn:aws:sns:eu-west-1:abc:foo'));
	t.false(fn('arn:aws:sns:eu-west-1:123456789876:foo/bar'));
	t.true(fn('arn:aws:sns:eu-west-1:123456789876:foo'));
	t.true(fn('arn:aws:sns:eu-west-1:123456789876:foo-bar'));
	t.true(fn('arn:aws:sns:eu-west-1:123456789876:foo_bar'));
	t.true(fn('arn:aws:sns:eu-west-1:123456789876:foo-bar_baz'));
});
