type repo = {
	fullname: string,
	description: string,
	starcount: number,
	url: string
};

type repoL = {reponame: string, starcount: number}[];

const enum loadingState {none, new, append};

export type {repo, repoL};
export {loadingState};