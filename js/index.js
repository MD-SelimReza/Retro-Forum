const postsLoads = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const json = await res.json();
    const posts = json.posts;
    // console.log(posts);
    displayPosts(posts);
};

const displayPosts = (posts) => {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        // console.log(post.image);
        const postBox = document.createElement('div');
        postBox.classList = "flex gap-4 bg-[#F3F3F5] rounded-3xl p-6 mt-5";
        postBox.innerHTML = `
        <div class="size-16 bg-gray-500 relative rounded-lg">
            <div
                class="bg-green-500 size-3 rounded-full absolute -top-1 -right-1"
            ></div>
            <img src="${post.image}" alt="profile-pic" class="size-16 rounded-lg" />
        </div>
        <div class="flex w-full flex-col justify-between">
                <p class="space-x-8">
                    <span># ${post.category}</span> <span>Author: ${post.author.name}</span>
                </p>
                <h3 class="text-xl text-[#12132D] font-bold my-2">${post.title}</h3>
                <p>${post.description}</p>
            <div
                class="flex justify-between border-t border-dashed border-[#12132D99] mt-5 pt-5"
            >
                <p class="space-x-8">
                <span><i class="fa-regular fa-message"></i> ${post.comment_count}</span>
                <span><i class="fa-regular fa-eye"></i> ${post.view_count}</span>
                <span><i class="fa-regular fa-clock"></i> ${post.posted_time} min</span>
                </p>
                <span class="bg-[#10B981] text-white rounded-full px-1"><i class="fa-regular fa-envelope"></i></span>
            </div>
        </div>
        `;
        postsContainer.appendChild(postBox);
    });
}

postsLoads();