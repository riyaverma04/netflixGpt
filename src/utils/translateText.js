



const translateText = async (text, language) => {
  try {
    if (language === "en") return text;
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`
    );

    const data = await res.json();

    return data?.responseData?.translatedText || text;

  } catch (err) {
    console.error("Translation failed:", err);
    return text;
  }
};

export default translateText;