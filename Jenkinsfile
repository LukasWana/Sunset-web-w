pipeline {
  agent any
  options {
    disableConcurrentBuilds()
  }
  stages {
    stage('Build - Yarn install') {
      steps {
        sh 'yarn install --registry https://jasir.bytesafe.dev/r/ent/'
      }
    }
    stage('Build SSR') {
      when {
        branch 'master'
      }
      steps {
        sh 'quasar build -m ssr'
      }
    }
    stage('Production deploy SSR to /altisima/sunset-apartment.com') {
      when {
        branch 'master'
      }
      steps {
        sh 'sudo rm -rf /altisima/public-quasar-webs/sunset-apartment.com/*'
        sh 'cp -R dist/ssr/* /altisima/public-quasar-webs/sunset-apartment.com'
        sh 'cd /altisima/public-quasar-webs/sunset-apartment.com && yarn'
      }
    }
    stage('Restart nodejs service') {
      when {
        branch 'master'
      }
      steps {
        sh 'sudo systemctl restart sunset-apartment.com.service'
        sh 'sudo systemctl status sunset-apartment.com.service'
      }
    }
  }
}
