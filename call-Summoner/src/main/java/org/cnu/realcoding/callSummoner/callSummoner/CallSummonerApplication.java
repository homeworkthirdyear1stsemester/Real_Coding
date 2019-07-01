package org.cnu.realcoding.callSummoner.callSummoner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class CallSummonerApplication {

    public static void main(String[] args) {

        SpringApplication.run(CallSummonerApplication.class, args);

    }

}
