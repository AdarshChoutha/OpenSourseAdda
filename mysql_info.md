#   CREATE DATABASE osa_database;
#   USE osa_database;
#   CREATE TABLE user_accounts (
        user_id int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        email_id varchar(255) NOT NULL UNIQUE KEY,
        user_password varchar(255) NOT NULL
#   );
#   CREATE TABLE course_info (
        course_id int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        course_title varchar(127) NOT NULL,
        course_description varchar(255) NOT NULL,
        course_price MEDIUMINT UNSIGNED NOT NULL DEFAULT 0,
        total_duration TINYINT UNSIGNED NOT NULL DEFAULT 0,
        course_topics JSON
#   );
#   CREATE TABLE enrollment_data (
        email_id varchar(255) NOT NULL,
        course_title varchar(127) NOT NULL,
        paid MEDIUMINT UNSIGNED NOT NULL DEFAULT 0,
        rating_given TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
        completed_topics JSON
#   );

#   INSERT INTO course_info (course_title,  course_description, course_price, total_duration, course_topics)
        VALUES (
                'html', 'Basics of HTML', 500, 20,
                '[
                     { "topic_id": 1, "topic_title": "Introduction to HTML" },
                     { "topic_id": 2, "topic_title": "Elements in HTML" },
                     { "topic_id": 3, "topic_title": "Tags, Styles & Scripts in HTML" },
                     { "topic_id": 4, "topic_title": "Summary" }
                ]'
        );

#   UPDATE course_info
        SET course_topics = '[
                                { "topic_id": 1, "topic_title": "Introduction to HTML" },
                                { "topic_id": 2, "topic_title": "Elements in HTML" },
                                { "topic_id": 3, "topic_title": "Tags, Styles & Scripts in HTML" },
                                { "topic_id": 4, "topic_title": "Summary" }
                             ]'
        WHERE course_title = 'html';

######

#  "Database": "osa_database",
#  "Tables": {
#      "user_accounts": {
                "user_id":            int UNSIGNED    NOT NULL    AUTO_INCREMENT    PRIMARY KEY
                "email_id":           varchar(255)    NOT NULL                      UNIQUE  KEY
                "user_password":      varchar(255)    NOT NULL
#       },
#       "course_info": {
                "course_id":          int UNSIGNED    NOT NULL    AUTO_INCREMENT    PRIMARY KEY
                "course_title":       varchar(127)    NOT NULL
                "course_description": varchar(255)    NOT NULL
                "course_price":       int UNSIGNED    NOT NULL                      DEFAULT 0
                "daily_duration":     int UNSIGNED    NOT NULL                      DEFAULT 0
                "total_duration":     int UNSIGNED    NOT NULL                      DEFAULT 0
                "course_topics": [
                        {
                        "topic_id":   int UNSIGNED    NOT NULL
                        "topic_title":varchar(255)    NOT NULL
                        }
                ]
#       },
#       "enrollment_data": {
                "email_id":           varchar(255)    NOT NULL
                "course_title":       varchar(127)    NOT NULL
                "paid":               int UNSIGNED                                  DEFAULT 0
                "rating_given":       int(1)UNSIGNED  NOT NULL                      DEFAULT 0
                "completed_topics_id":[]
#       }
##  }
