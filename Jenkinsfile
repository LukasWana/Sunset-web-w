pipeline {
  agent any
  stages {
    stage('Build - Yarn install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build SPA') {
      steps {
        sh 'quasar build spa'
      }
    }
    stage('Build SSR') {
      steps {
        sh 'quasar build ssr'
      }
    }



  }
}
