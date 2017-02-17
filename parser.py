import pandas as pd
import numpy as np

df = pd.read_csv("data.csv")
df = df.set_index(pd.to_datetime(df['Date Account Created']).values)
uni = df["Üniversite"]
target = pd.read_table("target_unis.txt", names=["Okul", "Hedef"])
target['Gerçekleşen'] = [len(uni[uni == i]) for i in target["Okul"].values]
target['Okul (Kısa)'] = [
    "Boğaziçi",
    "Bilkent",
    "Koç",
    "Sabancı",
    "İTÜ",
    "ODTÜ",
    "Galatasaray",
    "YTÜ",
    "Özyeğin",
    "Bilgi",
    "Bahçeşehir",
    "Dokuz Eylül",
    "Ege",
    "Anadolu",
    "İstanbul",
    "Marmara",
    "Hacettepe",
    "Yeditepe",
    "TOBB"  
]
users = pd.DataFrame({'total': len(df), 'new': len(df['2017'])}, index=['Count'])

users.to_csv("users.csv", index=False, header=False)
target.to_csv("target.csv", index=False, header=False, encoding="utf-8")