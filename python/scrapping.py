from bs4 import BeautifulSoup
import requests
import schedule
import time
# u can scrap/traverse/go thru any sites Html source code and fetch the info

# this is sometimes also called simple crawler

def fetchHeadlines():
    apiUrl="https://www.bbc.com/news"

    response = requests.get(apiUrl)

    print("Latest Headines from across the world with BBC .")
    if response.status_code==200:
        #parse the response
        soup=BeautifulSoup(response.text,"html.parser")
        data=soup.find_all("h2")
        for d in data:
            print(f"Headline : {d.contents[0]}")
            
schedule.every(10).seconds.do(fetchHeadlines)

while(True):
    schedule.run_pending()
    time.sleep(1)