app.get("/api/cv/download", async (req, res) => {
  const response = await fetch(CV_URL, {
    headers: {
      'Authorization': 'Bearer ' + process.env.D2_TOKEN
    }
  });
  // stream same as above
});
