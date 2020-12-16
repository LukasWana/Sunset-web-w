import { BlockFileSystemRepository } from './BlockFileSystemRepository'
import { expect } from 'chai'

const TEST_REPO_PATH = `${__dirname}/test-assets/block-repository`
describe('BlockFileSystemRepository', () => {
  let blockFileSystemRepository: BlockFileSystemRepository

  beforeEach(() => {
    blockFileSystemRepository = new BlockFileSystemRepository(TEST_REPO_PATH)
  })

  describe('BlockFileSystemRepository', () => {
    it('provides basic class function', () => {
      expect(blockFileSystemRepository).to.be.an.instanceof(BlockFileSystemRepository)
      expect(blockFileSystemRepository.hello()).to.be.equal('hello world')
      expect(blockFileSystemRepository.path).to.be.equal(TEST_REPO_PATH)
    })
  })

  describe('loadBlocks', function () {
    it('load and parses blocks', async function () {
      const result = await blockFileSystemRepository.loadBlocks()
      expect(result).to.deep.equal({ a: 3 })
    })
  })
})
