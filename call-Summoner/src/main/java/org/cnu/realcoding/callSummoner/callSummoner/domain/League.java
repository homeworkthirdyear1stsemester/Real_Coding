package org.cnu.realcoding.callSummoner.callSummoner.domain;

import lombok.Data;

@Data
public class League {
    private String leagueId;
    private String leagueName;
    private String queueType;
    private String position;
    private String tier;
    private String rank;
    private int leaguePoints;
    private int wins;
    private int losses;
    private boolean veteran;
    private boolean inactive;
    private boolean freshBlood;
    private boolean hotStreak;
    private String summonerId;
    private String summonerName;
    private Series miniSeries;

    public static class Series{
        public int target;
        public int wins;
        public int losses;
        public String progress;
    }

}