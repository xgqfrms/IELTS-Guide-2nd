"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @actions
const github_1 = require("@actions/github");
const core_1 = require("@actions/core");
// libs
const dedent_1 = __importDefault(require("dedent"));
const log = console.log;
function greet(name, repoUrl) {
    log(`👻 Hello ${name}! You are running a GitHub Action in \n${repoUrl}`);
}
// function 参数解构 ✅
// function getRepoUrl({ repo, serverUrl }: GithubContext): string {
//   log(`repo, serverUrl =`, repo, serverUrl);
//   return `${serverUrl}/${repo.owner}/${repo.repo}`;
// }
function getRepoUrl(context) {
    const { repo, serverUrl } = context;
    log(`context =`, context);
    log(`repo, serverUrl =`, repo, serverUrl);
    return `${serverUrl}/${repo.owner}/${repo.repo}`;
}
const inputName = (0, core_1.getInput)("name");
greet(inputName, getRepoUrl(github_1.context));
async function getDiff() {
    if (ghToken && github_1.context.payload.pull_request) {
        // token
        const octokit = (0, github_1.getOctokit)(ghToken);
        // git diff
        const result = await octokit.rest.repos.compareCommits({
            repo: github_1.context.repo.repo,
            owner: github_1.context.repo.owner,
            head: github_1.context.payload.pull_request.head.sha,
            base: github_1.context.payload.pull_request.base.sha,
            per_page: 100,
        });
        return result.data.files || [];
    }
    else {
        return [];
    }
}
const ghToken = (0, core_1.getInput)(`ghToken`);
getDiff().then(files => {
    // JSON.stringify(files, null, 4)
    const result = (0, dedent_1.default)(`
    Your PR diff:
    ${JSON.stringify(files, undefined, 2)}
  `);
    log(result);
});
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = '';
        if (gender) {
            this.gender = gender;
        }
    }
    // getter & setter
    get whoami() {
        return this.name;
    }
    set whoami(name) {
        this.name = name;
    }
    getName() {
        var _a;
        return (_a = this.name) !== null && _a !== void 0 ? _a : 'unknown name';
    }
}
const person = new Person('xgqfrms', 23);
log(`whoami =`, person.whoami, person.getName());
// export {};
