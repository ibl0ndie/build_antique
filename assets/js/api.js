function showPrice(){
    await fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
    method: "POST",
    headers: new Headers({
        "content-type": "application/json",
        "x-api-key": "786be8ab-1a98-4539-9418-c02228ba4829",
    }),
    body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 2,
        meta: false,
    }),
    });
}