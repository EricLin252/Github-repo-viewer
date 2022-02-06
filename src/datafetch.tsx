const datafetch = (username: string, page: number = 1, reponame: string = "") => {
	return new Promise((resolve, reject) => {
		fetch(
			reponame === ""?
				"https://api.github.com/users/" + username + "/repos?per_page=10&page=" + page :
				"https://api.github.com/repos/" + username + "/" + reponame,
			{
				method: "GET"
			}
		)
		.then(result => {
			if(!result.ok){
				reject("搜尋錯誤, 用戶名不存在");
			}
			resolve(result.json());
		})
		.catch((err) => {
			console.log(err.code + ": " + err.message);
			reject("無法連線, 請檢查是否連上網路");
		});
	});
}

export default datafetch;