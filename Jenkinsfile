pipeline {
  agent any
  stages {
    stage('Build - Yarn install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build SPA') {
      when {
        branch 'master'
      }
      steps {
        sh 'quasar build spa'
      }
    }
    stage('Build SSR') {
      when {
        branch 'production'
      }
      steps {
        sh 'quasar build ssr'
      }
    }
    stage('Production deploy SSR to /altisima/public-quasar-webs') {
      when {
        branch 'production'
      }
      steps {
        sh 'echo should copy to dir...'
      }
    }
    stage('Stage deploy SPA to /altisima/public-apache-webs/jidelnasql-web-staging') {
      when {
        branch 'master'
      }
      steps {
        sh 'should copy to SPA'
      }
    }


  }
}
